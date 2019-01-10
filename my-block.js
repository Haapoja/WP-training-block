// First argument: name of the block. The name/ method is used incase there are several plugins with the name of border-box. 
//second argument: Object
wp.blocks.registerBlockType("me/border-box", {
    title: "My Cool Border Box",
    icon: "smiley", //wordpress dashicons
    category: "common",
    attributes: {
        content: { type: "string" },
        color: { type: "string" }
    },
    //when wordpress works with custom blocks and calls the edit and save functions, its going to pass into it different methods/data
    //setting props as a paramiter allows me to access these methods/data
    edit: function (props) {
        function updateContent(event) {
            props.setAttributes({ content: event.target.value })
        }
        function updateColor(value) {
            props.setAttributes({ color: value.hex })
        }
        //return wp.element.createElement( ) would also work
        return React.createElement(
            "div",
            null,
            React.createElement(
                "h3",
                null,
                "Cool border box "
            ),
            React.createElement("input", { type: "text", value: props.attributes.content, onChange: updateContent }),
            React.createElement(wp.components.ColorPicker, { onChangeComplete: updateColor, color: props.attributes.color })
        );
    },
    save: function (props) {
        return React.createElement(
            "h3",
            { style: { border: "5px solid " + props.attributes.color } },
            props.attributes.content
        );
    }
})