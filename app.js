import express from "express";
import employees from "#db/employees";

const app = express();

app.route("/").get((req, res) => {
  res.send("Hello employees!");
});

app.route("/employees").get((req, res) => {
  res.send(employees);
});

app.get("/employees/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * employees.length);
  const randomEmployee = employees[randomIndex];

  res.send(randomEmployee);
});

app.route("/employees/:id").get((req, res) => {
  const id = parseInt(req.params.id);
  const employee = employees.find((e) => e.id === id);

  if (!employee)
    return res.status(404).send("There is no matching eomployee id.");

  res.json(employee);
});

export default app;
