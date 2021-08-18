function calcularDelta() {
    var A = document.getElementById('A').value;
    var B = document.getElementById('B').value;
    var C = document.getElementById('C').value;

    A = Number(A);
    B = Number(B);
    C = Number(C);

    // delta = B2 - 4AC
    // Math.pow(base, expoente) -> Ex.: Math.pow(10, 3)
    var delta = Math.pow(B, 2) - 4 * A * C;

    document.getElementById('resultado').value = delta;
}