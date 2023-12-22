const _navcreater = async () => {
    let _nav_json = [];
    _nav_json = await (async () => {
        try {
            const response = await fetch('nav.json');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const navJson = await response.json();
            return navJson
        } catch (error) {
            console.error('Error fetching nav.json:', error);
            return null;
        }
    })()

    const _nav = document.createElement("nav")
    _nav.id = "_nav"
    _nav.classList = "_nav _without_width"
    if (document.body.firstChild) {
        document.body.insertBefore(_nav, document.body.firstChild);
    } else {
        document.body.appendChild(_nav);
    }


    const _nav_open_btn = document.createElement("button")
    _nav_open_btn.id = "_nav_open_btn"
    _nav_open_btn.classList = "_nav_open_btn _visible"
    _nav.appendChild(_nav_open_btn)
    const _nav_open_svg = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "svg",
    );
    _nav_open_btn.appendChild(_nav_open_svg)
    _nav_open_svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    _nav_open_svg.setAttribute("width", "40");
    _nav_open_svg.setAttribute("height", "40");
    _nav_open_svg.setAttribute("id","_nav_open_svg")
    _nav_open_svg.setAttribute("fill", "black");
    _nav_open_svg.setAttribute("class", "bi bi-list");
    _nav_open_svg.setAttribute("viewBox", "0 0 16 16");
    const _nav_open_svg_path = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path",
    );
    _nav_open_svg_path.setAttribute("d", "M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5")
    _nav_open_svg.appendChild(_nav_open_svg_path)


    const _nav_close_btn = document.createElement("button")
    _nav_close_btn.id = "_nav_close_btn"
    _nav_close_btn.classList = "_nav_close_btn _hidden"

    _nav.appendChild(_nav_close_btn)
    const _nav_close_svg = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "svg",
    );
    _nav_close_btn.appendChild(_nav_close_svg)
    _nav_close_svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    _nav_close_svg.setAttribute("width", "40");
    _nav_close_svg.setAttribute("height", "40");
    _nav_close_svg.id="_nav_close_svg"
    _nav_close_svg.setAttribute("fill", "black");
    _nav_close_svg.setAttribute("class", "bi bi-x-lg ");
    _nav_close_svg.setAttribute("viewBox", "0 0 16 16");
    const _nav_close_svg_path = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path",
    );
    _nav_close_svg_path.setAttribute("d", "M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z")
    _nav_close_svg.appendChild(_nav_close_svg_path)


    const _pul = document.createElement("ul")
    _pul.id = "_nav_ul_primary"
    _pul.classList = "_nav_ul _hidden"
    _nav.appendChild(_pul)


    _nav_open_btn.addEventListener("click", () => {
        _nav.classList.remove("_without_width")
        _nav.classList.add("_with_width")
        _nav_open_btn.classList.remove("_visible")
        _nav_open_btn.classList.add("_hidden")
        _pul.classList.remove('_hidden')
        _pul.classList.add('_visible')
        _nav_close_btn.classList.remove("_hidden")
        _nav_close_btn.classList.add("_visible")
    })
    _nav_close_btn.addEventListener("click", () => {
        _nav.classList.remove("_with_width")
        _nav.classList.add("_without_width")
        _nav_close_btn.classList.remove("_visible")
        _nav_close_btn.classList.add("_hidden")
        _pul.classList.remove('_visible')
        _pul.classList.add('_hidden')
        _nav_open_btn.classList.remove("_hidden")
        _nav_open_btn.classList.add("_visible")
    })

    _nav_json.forEach((element) => {
        const _li = document.createElement(Object.keys(element)[0])
        _pul.appendChild(_li)
        if (Object.keys(element.li)[0] === "a") {
            const _a = document.createElement(Object.keys(element.li)[0])
            _a.setAttribute("href", `${element.li.a.href}`)
            _li.appendChild(_a)
            const _link_button = document.createElement("button")
            _link_button.textContent = element.li.a.button
            _link_button.classList="_link_button"
            _a.appendChild(_link_button)
        }
        else {
            const _dd_btn = document.createElement("button")
            _dd_btn.textContent = element.li[0]
            _dd_btn.id="_dd_btn"
            _li.appendChild(_dd_btn)
            const _dd_btn_svg = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "svg",
            );
            _dd_btn.appendChild(_dd_btn_svg)
            _dd_btn_svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
            _dd_btn_svg.setAttribute("width", "16");
            _dd_btn_svg.setAttribute("height", "16");
            _dd_btn_svg.id="_dd_btn_svg"
            _dd_btn_svg.setAttribute("fill", "black");
            _dd_btn_svg.setAttribute("class", "bi bi-chevron-right  _chevron_right");
            _dd_btn_svg.setAttribute("viewBox", "0 0 16 16");
            const _dd_btn_svg_path = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "path",
            );
            _dd_btn_svg_path.setAttribute("d", "M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z")
            _dd_btn_svg.appendChild(_dd_btn_svg_path)
            const _dd_ul = document.createElement("ul")
            _dd_ul.classList = "_dd_ul _hidden"
            _dd_ul.id = `__${element.li[0]}`
            _li.appendChild(_dd_ul)
            _dd_btn.addEventListener("click", () => {
                if (_dd_ul.classList.contains('_hidden')) {
                    _dd_ul.classList.remove("_hidden")
                    _dd_ul.classList.add("_visible")
                    _dd_btn_svg.classList.remove("_chevron_right")
                    _dd_btn_svg.classList.add("_chevron_down")
                }
                else{
                    _dd_ul.classList.add("_hidden")
                    _dd_ul.classList.remove("_visible")
                    _dd_btn_svg.classList.add("_chevron_right")
                    _dd_btn_svg.classList.remove("_chevron_down")
                }
            })
            element.li[1].ul.forEach((el) => {
                const _dd_li = document.createElement(Object.keys(el)[0])
                _dd_ul.appendChild(_dd_li)
                if (Object.keys(el.li)[0] === "a") {
                    const _dd_a = document.createElement(Object.keys(el.li)[0])
                    _dd_a.setAttribute("href", `${el.li.a.href}`)
                    _dd_li.appendChild(_dd_a)
                    const _dd_link_button = document.createElement("button")
                    _dd_link_button.classList="_dd_link_btn"
                    _dd_link_button.textContent = el.li.a.button
                    _dd_a.appendChild(_dd_link_button)
                }

            })

        }
    })

}


_navcreater()