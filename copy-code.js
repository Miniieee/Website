document.addEventListener("DOMContentLoaded", function () {
    const copyButton = document.querySelector(".copy-button");

    copyButton.addEventListener("click", function () {
        const code = document.querySelector("code");
        const textArea = document.createElement("textarea");
        textArea.textContent = code.textContent;
        document.body.append(textArea);
        textArea.select();
        document.execCommand("copy");
        textArea.remove();
        alert("Code copied to clipboard!");
    });
});
