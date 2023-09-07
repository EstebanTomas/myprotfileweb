
const controllerMain = {
    main: (req, res) => {
        let data = ["HTML5","CSS3","MySQL", "JavaScritp", "UI-UX"]
        res.render("mainPage", {"skills": data});
    }
}

module.exports = controllerMain;