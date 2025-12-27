function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

document.getElementById("regForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Registration Successful! Our team will contact you soon.");
    this.reset();
});
