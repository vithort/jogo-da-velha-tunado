# jogo-da-velha-tunado

Aplicações web na prática com Javascript e Node.js: Jogo da Velha Tunado

## Copiar Bootstrap CSS

[Bootswatch](https://bootswatch.com/)

## Instalar Browsersync

[Browsersync](https://browsersync.io/)

```npm
npm install -g browser-sync
```

## Executar o Browsersync

```cmd
browser-sync start --server "./dist" --files "."`
```

Qualquer alteração na pasta indicada, faz um reload no site


## Verificando Vitória

### Posições de Vitória

1 | 4 | 7
_________
2 | 5 | 8
_________
3 | 6 | 9

111000000  \            / 448
000111000   |           |  56
000000111   |           |   7
100100100   | - Bitmap -| 292
010010010   |           | 146
001001001   |           |  73
100010001   |           | 273
001010100  /            \  84

Convertendo: [448, 56, 7, 292, 146, 73, 273, 84]