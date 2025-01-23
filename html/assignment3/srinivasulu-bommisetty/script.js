let btn = document.getElementById("load-info");
      btn.addEventListener("click", () => {
        let template = document.getElementById("welcome-note");

        const clone = document.importNode(template.content, true);
        document.getElementById("show-note").appendChild(clone);
      });