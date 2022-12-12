figma.showUI(__html__);

figma.ui.onmessage = msg => {
    if (msg.type === 'generate- name') {
        console.log("Gender is: ", msg.gender)
        console.log("First name used: ", msg.hasFirstName)
        console.log("Last name used: ", msg.hasLastName)


        /*const nodes: SceneNode[] = [];
        for (let i = 0; i < msg.count; i++) {
            const rect = figma.createRectangle();
            rect.x = i * 150;
            rect.fills = [{type: 'SOLID', color: {r: 1, g: 0.5, b: 0}}];
            figma.currentPage.appendChild(rect);
            nodes.push(rect);


            console.log()
        }
        figma.currentPage.selection = nodes;
        figma.viewport.scrollAndZoomIntoView(nodes);*/
    }
    if (msg.type === 'close') {
        figma.closePlugin();
    }
};

