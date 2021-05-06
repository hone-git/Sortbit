def onLED(row: number):
    global x
    while x <= MAX_NUM - 1:
        led.unplot(x, row)
        if x < list2[row]:
            led.plot(x, row)
        x += 1
def makeRange(len: number):
    global l
    l = [0, 1]
    for index in range(len):
        pass

def on_button_pressed_b():
    doBubbleSort()
input.on_button_pressed(Button.B, on_button_pressed_b)

def doBubbleSort():
    global i, j, temp
    i = 0
    while i < LEN - 1:
        j = LEN - 1
        for value in list2:
            pass
        while j > i:
            if list2[j - 1] > list2[j]:
                temp = list2[j - 1]
                list2[j - 1] = list2[j]
                list2[j] = temp
                x2 = 0
                while x2 <= MAX_NUM - 1:
                    led.unplot(x2, j - 1)
                    if x2 < list2[j - 1]:
                        led.plot(x2, j - 1)
                    x2 += 1
                x3 = 0
                while x3 <= MAX_NUM - 1:
                    led.unplot(x3, j)
                    if x3 < list2[j]:
                        led.plot(x3, j)
                    x3 += 1
            j += -1
            basic.pause(200)
        i += 1
temp = 0
j = 0
i = 0
l: List[number] = []
x = 0
y = 0
list2: List[number] = []
MAX_NUM = 0
LEN = 0
LEN = 5
if LEN > 5:
    LEN = 5
MAX_NUM = 5
if MAX_NUM > 5:
    MAX_NUM = 5
list2 = [randint(0, MAX_NUM)]
for index2 in range(LEN - 1):
    list2.append(randint(0, MAX_NUM))
while y <= LEN - 1:
    onLED(y)
    y += 1