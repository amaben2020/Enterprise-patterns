// 1; // Import stylesheets
// import './style.css';

// export interface BaseEntity {
//   id: string | null;
// }

// export interface Widget extends BaseEntity {
//   title: string;
//   description: string;
//   price: number;
// }

// class HomeComponent {
//   price: any;
//   mode;
//   widgets: Widget[];

//   refactoredCalculateTotal(mode, widgets, widget) {
//     this.widgets = this.updateWidgets(mode, widgets, widget);
//     this.price = this.getTotalPrice(widgets);
//   }

//   updateWidgets(mode, widgets, widget) {
//     switch (mode) {
//       case 'create':
//         return this.addWidget(widgets, widget);
//       case 'update':
//         return this.updateWidget(widgets, widget);
//       case 'delete':
//         return this.deleteWidget(widgets, widget);
//       default:
//         break;
//     }
//   }

//   addWidget(widgets, widget) {
//     const newWidget = Object.assign({}, widget, { id: uuidv4() });
//     return [...widgets, newWidget];
//   }

//   updateWidget(widgets, widget) {
//     return widgets.map((wdgt) =>
//       widget.id === wdgt.id ? Object.assign({}, widget) : wdgt
//     );
//   }

//   deleteWidget(widgets, widget) {
//     return widgets.filter((wdgt) => widget.id !== wdgt.id);
//   }

//   getTotalPrice(widgets) {
//     return widgets.reduce((acc, curr) => acc + curr.price, 0);
//   }
// }

// // Write TypeScript code!
// const appDiv: HTMLElement = document.getElementById('app');
// appDiv.innerHTML = `<h1>Refactor Example</h1>`;
export const myFunc = (f: string) => {
  return console.log(f);
};

console.log(myFunc('hello'));
