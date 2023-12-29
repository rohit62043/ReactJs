function customRender(reactElement, mainContainerElement) {
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    // domElement.setAttribute('href', reactElement.props.href);
    // domElement.setAttribute('target', reactElement.props.target);

    // Making more modular
    for (const key in reactElement.props) {
        if (key === 'children') {
            continue;
        }

        domElement.setAttribute(key, reactElement.props[key]);
    }

    mainContainer.appendChild(domElement);
}
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank',
    },
    children: 'Click me to visit google'
}
const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer);