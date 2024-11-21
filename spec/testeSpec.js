describe("Testes das funções exemplo e exercícios", function () {

    it("Teste: multiplicar três números", function () {
        expect(multiplicarTresNumeros(2, 3, 4)).toBe(24);
        expect(multiplicarTresNumeros(1, 5, 2)).toBe(10);
        expect(multiplicarTresNumeros(1, 0, 3)).toBe(0);
    });

    it("Teste: divisão", function () {
        expect(dividir(10, 2)).toBe(5);
        expect(dividir(7, 0)).toBe("Não é possível dividir por 0");
        expect(dividir(15, 3)).toBe(5);
    });

    it("Teste: conversões de temperatura", function () {
        expect(celsiusFahrenheit(0)).toBe(32);
        expect(celsiusFahrenheit(100)).toBe(212);
        expect(fahrenheitCelsius(32)).toBeCloseTo(0, 1);
        expect(fahrenheitCelsius(212)).toBeCloseTo(100, 1);
    });

    it("Teste: calcular média", function () {
        expect(calcularMedia(3, 4, 5)).toBe(4);
        expect(calcularMedia(10, 20, 30)).toBe(20);
        expect(calcularMedia(0, 0, 0)).toBe(0);
    });

    it("Teste: contar caracteres", function () {
        expect(contarCaracteres("hello")).toBe(5);
        expect(contarCaracteres("12345")).toBe(5);
        expect(contarCaracteres("")).toBe(0);
        expect(contarCaracteres("Jasmine")).toBe(7);
    });

    it("Teste: calculadora", function () {
        expect(calculadora(4, 2, "+")).toBe(6);
        expect(calculadora(4, 2, "-")).toBe(2);
        expect(calculadora(4, 2, "*")).toBe(8);
        expect(calculadora(4, 2, "/")).toBe(2);
        expect(calculadora(4, 0, "/")).toBe("Não é possível dividir por 0");
        expect(calculadora(4, 2, "%")).toBe("Operador inválido");
    });
});
