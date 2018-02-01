console.log('build-it-visible.js is running!');

const app = {
    title: 'Visibility Toggle',
    visibilityState: false,
    details: 'Here are the hidden details.'
};

const changeVisibilityState = () => {
    app.visibilityState = !app.visibilityState;
    renderTemplate();
};

const renderTemplate = () => {
  const template = (
      <div>
          <h1>{app.title}</h1>
          <button onClick={changeVisibilityState}>{app.visibilityState ? 'Hide details' : 'Show details'}</button>
          {!app.visibilityState ? null : <p>{app.details}</p>}
      </div>
  );

  ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById('app');

renderTemplate();

