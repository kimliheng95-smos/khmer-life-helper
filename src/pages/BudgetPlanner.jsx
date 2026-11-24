import { useState } from "react";
import { useLanguage } from "../context/useLanguage";
import PageHero from "../components/PageHero";
import { ProgressRing, Reveal } from "../components/Motion";

function BudgetPlanner() {
  const { t } = useLanguage();

  const [form, setForm] = useState({
    income: "",
    savingsGoal: "",
    housing: "",
    food: "",
    transportation: "",
    education: "",
    bills: "",
    entertainment: "",
    other: "",
  });

  const [result, setResult] = useState(null);

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    setForm(function (previousForm) {
      return {
        ...previousForm,
        [name]: value,
      };
    });
  }

  function calculateBudget(event) {
    event.preventDefault();

    const income = Number(form.income) || 0;
    const savingsGoal = Number(form.savingsGoal) || 0;
    const housing = Number(form.housing) || 0;
    const food = Number(form.food) || 0;
    const transportation = Number(form.transportation) || 0;
    const education = Number(form.education) || 0;
    const bills = Number(form.bills) || 0;
    const entertainment = Number(form.entertainment) || 0;
    const other = Number(form.other) || 0;

    const totalExpenses =
      housing +
      food +
      transportation +
      education +
      bills +
      entertainment +
      other;

    const remaining = income - totalExpenses;

    let savingsProgress = 0;

    if (savingsGoal > 0 && remaining > 0) {
      savingsProgress = (remaining / savingsGoal) * 100;

      if (savingsProgress > 100) {
        savingsProgress = 100;
      }
    }

    const breakdown = [
      {
        key: "housing",
        label: t("budgetPlanner.expenses.housing"),
        amount: housing,
        color: "#2563eb",
      },
      {
        key: "food",
        label: t("budgetPlanner.expenses.food"),
        amount: food,
        color: "#059669",
      },
      {
        key: "transportation",
        label: t("budgetPlanner.expenses.transportation"),
        amount: transportation,
        color: "#d97706",
      },
      {
        key: "education",
        label: t("budgetPlanner.expenses.education"),
        amount: education,
        color: "#4f46e5",
      },
      {
        key: "bills",
        label: t("budgetPlanner.expenses.bills"),
        amount: bills,
        color: "#0891b2",
      },
      {
        key: "entertainment",
        label: t("budgetPlanner.expenses.entertainment"),
        amount: entertainment,
        color: "#e11d48",
      },
      {
        key: "other",
        label: t("budgetPlanner.expenses.other"),
        amount: other,
        color: "#64748b",
      },
    ].filter((item) => item.amount > 0);

    setResult({
      income,
      savingsGoal,
      totalExpenses,
      remaining,
      savingsProgress,
      breakdown,
    });
  }

  function fillSample() {
    setForm({
      income: "450",
      savingsGoal: "120",
      housing: "110",
      food: "120",
      transportation: "35",
      education: "45",
      bills: "25",
      entertainment: "20",
      other: "15",
    });
  }

  function clearBudget() {
    setForm({
      income: "",
      savingsGoal: "",
      housing: "",
      food: "",
      transportation: "",
      education: "",
      bills: "",
      entertainment: "",
      other: "",
    });

    setResult(null);
  }

  return (
    <main className="budget-planner-page pb-5">
      <PageHero
        badge={`💰 ${t("budgetPlanner.badge")}`}
        title={
          <>
            {t("budgetPlanner.heroTitleLine1")}
            <br />
            <span className="klh-gradient-text">
              {t("budgetPlanner.heroTitleLine2")}
            </span>
          </>
        }
        subtitle={t("budgetPlanner.heroDescription")}
        color="primary"
        align="center"
        breadcrumbs={[
          { label: t("navbar.life"), to: "/life" },
          { label: t("life.tools.budget.title") },
        ]}
      />

      <div className="container pt-5">

        <div className="row g-4">
          <div className="col-lg-7">
            <div className="card border-0 shadow-sm rounded-4">
              <div className="card-body p-4">
                <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-4">
                  <div className="d-flex align-items-center">
                    <div className="bg-primary-subtle text-primary rounded-3 p-3 me-3">
                      <i className="bi bi-wallet2 fs-4"></i>
                    </div>

                    <div>
                      <h4 className="fw-bold mb-1">
                        {t("budgetPlanner.form.title")}
                      </h4>

                      <p className="text-secondary mb-0">
                        {t("budgetPlanner.form.description")}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="btn btn-outline-primary btn-sm"
                    onClick={fillSample}
                  >
                    <i className="bi bi-magic me-1"></i>
                    {t("ui.budget.sampleButton")}
                  </button>
                </div>

                <form onSubmit={calculateBudget}>
                  <div className="mb-4">
                    <label className="form-label fw-semibold">
                      {t("budgetPlanner.form.income")}
                    </label>

                    <div className="input-group">
                      <span className="input-group-text">$</span>

                      <input
                        type="number"
                        name="income"
                        value={form.income}
                        onChange={handleChange}
                        className="form-control"
                        placeholder={t("budgetPlanner.form.incomePlaceholder")}
                        min="0"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-semibold">
                      {t("budgetPlanner.form.savingsGoal")}
                    </label>

                    <div className="input-group">
                      <span className="input-group-text">$</span>

                      <input
                        type="number"
                        name="savingsGoal"
                        value={form.savingsGoal}
                        onChange={handleChange}
                        className="form-control"
                        placeholder={t("budgetPlanner.form.savingsPlaceholder")}
                        min="0"
                      />
                    </div>
                  </div>

                  <h5 className="fw-bold mb-3">
                    {t("budgetPlanner.form.expensesTitle")}
                  </h5>

                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">
                        {t("budgetPlanner.expenses.housing")}
                      </label>

                      <div className="input-group">
                        <span className="input-group-text">$</span>

                        <input
                          type="number"
                          name="housing"
                          value={form.housing}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="0"
                          min="0"
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">
                        {t("budgetPlanner.expenses.food")}
                      </label>

                      <div className="input-group">
                        <span className="input-group-text">$</span>

                        <input
                          type="number"
                          name="food"
                          value={form.food}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="0"
                          min="0"
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">
                        {t("budgetPlanner.expenses.transportation")}
                      </label>

                      <div className="input-group">
                        <span className="input-group-text">$</span>

                        <input
                          type="number"
                          name="transportation"
                          value={form.transportation}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="0"
                          min="0"
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">
                        {t("budgetPlanner.expenses.education")}
                      </label>

                      <div className="input-group">
                        <span className="input-group-text">$</span>

                        <input
                          type="number"
                          name="education"
                          value={form.education}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="0"
                          min="0"
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">
                        {t("budgetPlanner.expenses.bills")}
                      </label>

                      <div className="input-group">
                        <span className="input-group-text">$</span>

                        <input
                          type="number"
                          name="bills"
                          value={form.bills}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="0"
                          min="0"
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">
                        {t("budgetPlanner.expenses.entertainment")}
                      </label>

                      <div className="input-group">
                        <span className="input-group-text">$</span>

                        <input
                          type="number"
                          name="entertainment"
                          value={form.entertainment}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="0"
                          min="0"
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <label className="form-label">
                        {t("budgetPlanner.expenses.other")}
                      </label>

                      <div className="input-group">
                        <span className="input-group-text">$</span>

                        <input
                          type="number"
                          name="other"
                          value={form.other}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="0"
                          min="0"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="d-flex gap-2 mt-4">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg flex-grow-1"
                    >
                      <i className="bi bi-calculator me-2"></i>
                      {t("budgetPlanner.calculate")}
                    </button>

                    <button
                      type="button"
                      className="btn btn-outline-secondary btn-lg"
                      onClick={clearBudget}
                    >
                      <i className="bi bi-arrow-counterclockwise"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="card border-0 shadow-sm rounded-4 h-100">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-4">
                  <div className="bg-success-subtle text-success rounded-3 p-3 me-3">
                    <i className="bi bi-bar-chart-line fs-4"></i>
                  </div>

                  <div>
                    <h4 className="fw-bold mb-1">
                      {t("budgetPlanner.summary.title")}
                    </h4>

                    <p className="text-secondary mb-0">
                      {t("budgetPlanner.summary.description")}
                    </p>
                  </div>
                </div>

                {!result ? (
                  <div className="text-center py-5">
                    <i className="bi bi-pie-chart display-3 text-secondary opacity-50"></i>

                    <h5 className="fw-bold mt-4">
                      {t("budgetPlanner.summary.emptyTitle")}
                    </h5>

                    <p className="text-secondary mb-0">
                      {t("budgetPlanner.summary.emptyDescription")}
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="d-flex justify-content-between py-3 border-bottom">
                      <span className="text-secondary">
                        {t("budgetPlanner.summary.income")}
                      </span>

                      <strong>${result.income.toFixed(2)}</strong>
                    </div>

                    <div className="d-flex justify-content-between py-3 border-bottom">
                      <span className="text-secondary">
                        {t("budgetPlanner.summary.totalExpenses")}
                      </span>

                      <strong className="text-danger">
                        ${result.totalExpenses.toFixed(2)}
                      </strong>
                    </div>

                    <div className="d-flex justify-content-between align-items-center py-4">
                      <span className="fw-semibold">
                        {t("budgetPlanner.summary.remaining")}
                      </span>

                      <strong
                        className={
                          result.remaining >= 0
                            ? "text-success fs-4"
                            : "text-danger fs-4"
                        }
                      >
                        ${result.remaining.toFixed(2)}
                      </strong>
                    </div>

                    <div className="mt-3 p-3 rounded-4 bg-light border d-flex align-items-center justify-content-between gap-3">
                      <div className="flex-grow-1">
                        <div className="d-flex justify-content-between mb-2">
                          <span className="fw-semibold">
                            {t("budgetPlanner.summary.savingsGoal")}
                          </span>

                          <span className="text-secondary fw-semibold">
                            ${result.savingsGoal.toFixed(2)}
                          </span>
                        </div>

                        <div className="progress mb-2" style={{ height: "10px" }}>
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{
                              width: `${result.savingsProgress}%`,
                            }}
                          ></div>
                        </div>

                        <small className="text-secondary">
                          {result.savingsProgress.toFixed(0)}%{" "}
                          {t("budgetPlanner.summary.ofSavingsGoal")}
                        </small>
                      </div>

                      <ProgressRing
                        value={result.savingsProgress}
                        size={72}
                        strokeWidth={6}
                        color="#059669"
                      />
                    </div>

                    {result.breakdown && result.breakdown.length > 0 && (
                      <div className="mt-4">
                        <h6 className="fw-bold mb-3">
                          {t("ui.budget.breakdownTitle")}
                        </h6>

                        <div className="d-grid gap-2">
                          {result.breakdown.map((item) => {
                            const share =
                              result.totalExpenses > 0
                                ? Math.round(
                                    (item.amount / result.totalExpenses) * 100,
                                  )
                                : 0;

                            return (
                              <div key={item.key}>
                                <div className="d-flex justify-content-between small mb-1">
                                  <span className="fw-medium">{item.label}</span>
                                  <span className="text-secondary">
                                    ${item.amount.toFixed(0)} ({share}%)
                                  </span>
                                </div>
                                <div
                                  className="progress"
                                  style={{ height: "7px" }}
                                >
                                  <div
                                    className="progress-bar"
                                    style={{
                                      width: `${share}%`,
                                      backgroundColor: item.color,
                                    }}
                                  ></div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    <div
                      className={`alert mt-4 ${
                        result.remaining >= 0 ? "alert-success" : "alert-danger"
                      }`}
                    >
                      <i
                        className={`bi ${
                          result.remaining >= 0
                            ? "bi-check-circle"
                            : "bi-exclamation-circle"
                        } me-2`}
                      ></i>

                      {result.remaining >= 0
                        ? t("budgetPlanner.summary.withinIncome")
                        : t("budgetPlanner.summary.overIncome")}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <Reveal className="row mt-5">
          <div className="col-12">
            <div className="bg-primary-subtle rounded-4 p-4">
              <div className="d-flex">
                <i className="bi bi-lightbulb-fill text-primary fs-3 me-3"></i>

                <div>
                  <h5 className="fw-bold">{t("budgetPlanner.tips.title")}</h5>

                  <p className="text-secondary mb-0">
                    {t("budgetPlanner.tips.description")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </main>
  );
}

export default BudgetPlanner;

