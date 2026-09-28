import { useState } from "react";
import { useLanguage } from "../context/useLanguage";

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

    setResult({
      income,
      savingsGoal,
      totalExpenses,
      remaining,
      savingsProgress,
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
    <main className="budget-planner-page py-5">
      <div className="container">
        <div className="text-center mb-5">
          <span className="badge bg-primary-subtle text-primary px-3 py-2 mb-3">
            💰 {t("budgetPlanner.badge")}
          </span>

          <h1 className="display-5 fw-bold">
            {t("budgetPlanner.heroTitleLine1")}
            <br />
            {t("budgetPlanner.heroTitleLine2")}
          </h1>

          <p
            className="lead text-secondary mx-auto"
            style={{ maxWidth: "700px" }}
          >
            {t("budgetPlanner.heroDescription")}
          </p>
        </div>

        <div className="row g-4">
          <div className="col-lg-7">
            <div className="card border-0 shadow-sm rounded-4">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-4">
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

                    <div className="mt-2">
                      <div className="d-flex justify-content-between mb-2">
                        <span className="fw-semibold">
                          {t("budgetPlanner.summary.savingsGoal")}
                        </span>

                        <span className="text-secondary">
                          ${result.savingsGoal.toFixed(2)}
                        </span>
                      </div>

                      <div className="progress" style={{ height: "10px" }}>
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

        <div className="row mt-5">
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
        </div>
      </div>
    </main>
  );
}

export default BudgetPlanner;

