figma.showUI(__html__);

figma.ui.resize(548,548) // w x h of the whole iframe

const GENDERS = {x: "Neutral", f: "Female", m: "Male"}
const COUNTRIES = {
    "AU": "Australia",
    "AT": "Austria",
    "BE": "Belgium",
    "BR": "Brazil",
    "BA": "Bosnia and Herzegovina",
    "CA": "Canada",
    "CZ": "Czechia",
    "DK": "Denmark",
    "GB": "United Kingdom",
    "GR": "Greece",
    "FI": "Finland",
    "FR": "France",
    "DE": "Germany",
    "HU": "Hungary",
    "IN": "India",
    "IL": "Israel",
    "IR": "Iran",
    "IT": "Italy",
    "JP": "Japan",
    "KR": "South Korea",
    "LT": "Lithuania",
    "NG": "Nigeria",
    "NL": "Netherlands",
    "NZ": "New Zealand",
    "NO": "Norway",
    "PL": "Poland",
    "UA": "Ukraine",
    "SE": "Sweden",
    "TR": "Turkey",
    "TN": "Tunisia",
    "VN": "Viet Nam"
}

//figma.ui.postMessage([{GENDERS: GENDERS}, {COUNTRIES: COUNTRIES}])
figma.ui.postMessage({GENDERS: GENDERS, COUNTRIES: COUNTRIES})

figma.ui.onmessage = async msg => {

    if (msg.type === 'generate- name') {
        console.log("Gender is: ", msg.gender)
        console.log("First name used: ", msg.hasFirstName)
        console.log("Last name used: ", msg.hasLastName)
        console.log("Is mixed country: ", msg.isMixedCountry)

        /**
         * Generate the figma text object and wrap it in a node, so we can zoom on it later
         */
        const nodes: SceneNode[] = []
        const name = figma.createText()
        figma.currentPage.appendChild(name)
        nodes.push(name)
        // Load the font in the text node before setting the character
        // @ts-ignore
        await figma.loadFontAsync(name.fontName)

        /**
         * Build the actual name
         */
        name.characters = msg.gender + msg.hasFirstName + msg.hasLastName


        /**
         * Zoom on the created name
         */
        figma.currentPage.selection = nodes;
        figma.viewport.scrollAndZoomIntoView(nodes);
    }
    if (msg.type === 'close') {
        figma.closePlugin();
    }
};

