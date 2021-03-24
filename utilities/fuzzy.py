from fuzzywuzzy import process

temp = []
with open("utilities/data.csv", "r") as csv:
    temp = csv.read().split("\n")

data = []
o =""
for m in temp:
    o = m.split(",")
    data.append(o)



def matcher(query, choices=data, limit=1):
    return process.extract(query, choices,limit = limit)
