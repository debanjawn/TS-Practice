// PascalCasing
function Message() {
    // JSX = converts to JS XML Code
    const name = "Deb"
    if (name)
        return <h1>Hello {name}</h1>;
    return <h1>Hello World</h1>;
}

export default Message;