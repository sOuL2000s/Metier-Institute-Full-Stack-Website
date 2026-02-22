/**
 * Simple email validation
 */
export function validateEmail(email) {
    return String(email)
        .toLowerCase()
        .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
}

/**
 * Helper function to create DOM elements with optional classes, attributes, and content.
 * @param {string} tag - The HTML tag name (e.g., 'div', 'p', 'img').
 * @param {string|string[]} [classNames=[]] - A single class name or an array of class names.
 * @param {Object} [attributes={}] - An object of key-value pairs for attributes (e.g., { src: 'image.jpg', alt: 'Description' }).
 * @param {string|Node|Node[]} [content=null] - Text content, a single child Node, or an array of child Nodes.
 * @returns {HTMLElement} The created DOM element.
 */
export function createElement(tag, classNames = [], attributes = {}, content = null) {
    const element = document.createElement(tag);

    // Add class names
    if (typeof classNames === 'string') {
        element.classList.add(classNames);
    } else if (Array.isArray(classNames)) {
        element.classList.add(...classNames);
    }

    // Add attributes
    for (const key in attributes) {
        if (attributes.hasOwnProperty(key)) {
            element.setAttribute(key, attributes[key]);
        }
    }

    // Add content
    if (content !== null) {
        if (typeof content === 'string') {
            element.textContent = content;
        } else if (Array.isArray(content)) {
            content.forEach(child => {
                if (child instanceof Node) {
                    element.appendChild(child);
                } else {
                    element.appendChild(document.createTextNode(String(child)));
                }
            });
        } else if (content instanceof Node) {
            element.appendChild(content);
        }
    }

    return element;
}
