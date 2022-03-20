# Reação

Escreva um pequeno jogo web (apenas frontend) que meça o tempo de
reação do usuário. O jogo consiste em fazer o usuário esperar um
tempo aleatório (curto, mas configurável) até que um elemento
visual seja adicionado ao DOM, indicando uma letra qualquer do
alfabeto. A partir desse momento, o tempo de reação do usuário
deve ser cronometrado até que ele pressione a tecla indicada.
Quando o usuário pressionar a tecla, o tempo total de espera deve
ser exibido na tela do usuário.

Use a API de `localstorage` no browser para armazenar os top-10 
recordes do usuário. De forma que cada vez que o usuário medir
seu tempo de reação, ele possa ser informado sobre a posição que
ocupou nos top-10 (ou se ele ficou abaixo).
