# Colors

input colors from polybar or some .ini format

outputs rgb colors in format recognizable for rofi's .rasi format

example: file called `nord` has a bunch of color codes in it.

```
cat nord

    nord0 = #2E3440
    nord1 = #3B4252
    nord2 = #434C5E
    nord3 = #4C566A
    nord4 = #D8DEE9
    nord5 = #E5E9F0
    nord6 = #ECEFF4
    nord7 = #8FBCBB
    nord8 = #88C0D0
    nord9 = #81A1C1
    nord10 = #5E81AC
    nord11 = #BF616A
    nord12 = #D08770
    nord13 = #EBCB8B
    nord14 = #A3BE8C
    nord15 = #B48EAD

node index.js nord

    nord0: rgb(46, 52, 64, 100 %);
    nord1: rgb(59, 66, 82, 100 %);
    nord2: rgb(67, 76, 94, 100 %);
    nord3: rgb(76, 86, 106, 100 %);
    nord4: rgb(216, 222, 233, 100 %);
    nord5: rgb(229, 233, 240, 100 %);
    nord6: rgb(236, 239, 244, 100 %);
    nord7: rgb(143, 188, 187, 100 %);
    nord8: rgb(136, 192, 208, 100 %);
    nord9: rgb(129, 161, 193, 100 %);
    nord10: rgb(94, 129, 172, 100 %);
    nord11: rgb(191, 97, 106, 100 %);
    nord12: rgb(208, 135, 112, 100 %);
    nord13: rgb(235, 203, 139, 100 %);
    nord14: rgb(163, 190, 140, 100 %);
    nord15: rgb(180, 142, 173, 100 %);

```
