export default function createIteratorObject(report) {
  const iterator = [];
  // eslint-disable-next-line no-unused-vars
  for (const [_, employees] of Object.entries(report.allEmployees)) {
    for (const employee of employees) {
      iterator.push(employee);
    }
  }
  return iterator;
}
