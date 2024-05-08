/**
 * <div id = "parent">
 *    <div id = "child">
 *      <h1>Hello from h1 tag !</h1>
 *      <h2>Hello from h2 tag !</h2>
 *    </div>
 * </div>
 *
 */

const h1 = React.createElement("h1", { key: 1 }, "Hello from h1 tag !");

const h2 = React.createElement("h2", { key: 2 }, "Hello from h2 tag !");

const child1 = React.createElement("div", { id: "child1", key: 1 }, [h1, h2]);

const child2 = React.createElement("div", { id: "child2", key: 2 }, [h1, h2]);

const prt = React.createElement("div", { id: "parent" }, [child1, child2]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(prt);
