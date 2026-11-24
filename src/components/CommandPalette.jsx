import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/useLanguage";
import { CORE_PAGES, TOOLS_CATALOG } from "../data/toolsCatalog";

function CommandPalette({ isOpen, onClose }) {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef(null);

  const items = useMemo(() => {
    const core = CORE_PAGES.map((page) => ({
      ...page,
      title: t(page.titleKey),
      subtitle: t("ui.search.pageLabel"),
    }));

    const tools = TOOLS_CATALOG.map((tool) => ({
      ...tool,
      title: t(tool.titleKey),
      subtitle: t(tool.descriptionKey),
    }));

    return [...tools, ...core];
  }, [t]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items.slice(0, 8);

    return items.filter((item) => {
      const haystack = [
        item.title,
        item.subtitle,
        item.category || "",
        ...(item.keywords || []),
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(q);
    });
  }, [items, query]);

  useEffect(() => {
    if (!isOpen) return undefined;
    const timer = window.setTimeout(() => {
      inputRef.current?.focus();
    }, 30);
    return () => window.clearTimeout(timer);
  }, [isOpen]);

  const handleSelect = (item) => {
    if (!item) return;
    navigate(item.to);
    setQuery("");
    setActiveIndex(0);
    onClose();
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      onClose();
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((prev) =>
        filtered.length > 0 ? (prev + 1) % filtered.length : 0,
      );
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((prev) =>
        filtered.length > 0
          ? (prev - 1 + filtered.length) % filtered.length
          : 0,
      );
      return;
    }

    if (event.key === "Enter" && filtered.length > 0) {
      event.preventDefault();
      handleSelect(filtered[activeIndex] || filtered[0]);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="klh-cmd-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label={t("ui.search.title")}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="klh-cmd-modal" onKeyDown={handleKeyDown}>
        <div className="klh-cmd-header">
          <i className="bi bi-search text-primary"></i>
          <input
            ref={inputRef}
            type="text"
            className="klh-cmd-input"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setActiveIndex(0);
            }}
            placeholder={t("ui.search.placeholder")}
          />
          <button
            type="button"
            className="klh-cmd-esc"
            onClick={onClose}
            aria-label={t("common.close")}
          >
            ESC
          </button>
        </div>

        <div className="klh-cmd-results">
          {filtered.length === 0 ? (
            <div className="text-center py-4 text-secondary">
              <i className="bi bi-search fs-3 d-block mb-2 opacity-50"></i>
              <div className="fw-semibold">{t("ui.search.noResults")}</div>
            </div>
          ) : (
            filtered.map((item, index) => {
              const active = index === activeIndex;
              return (
                <button
                  key={item.id + item.to}
                  type="button"
                  className={`klh-cmd-item ${active ? "is-active" : ""}`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => handleSelect(item)}
                >
                  <span
                    className={`klh-cmd-icon bg-${item.color}-subtle text-${item.color}`}
                  >
                    <i className={`bi ${item.icon}`}></i>
                  </span>

                  <span className="klh-cmd-text">
                    <strong>{item.title}</strong>
                    <small>{item.subtitle}</small>
                  </span>

                  <i className="bi bi-arrow-return-left klh-cmd-enter"></i>
                </button>
              );
            })
          )}
        </div>

        <div className="klh-cmd-footer">
          <span>
            <kbd>↑</kbd> <kbd>↓</kbd> {t("ui.search.navigate")}
          </span>
          <span>
            <kbd>Enter</kbd> {t("ui.search.open")}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CommandPalette;
