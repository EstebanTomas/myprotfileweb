
const controllerMain = {
    main: (req, res) => {
        let data = ["NodeJS", "Express", "JavaScript", "HTML5", "CSS3", "Sequelize", "MySQL", "UX-UI Desing"];
        res.render("mainPage", {"skills": data});
    }
}

module.exports = controllerMain;