from fastapi import FastAPI
import uvicorn
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import json

class Item(BaseModel):
    url: str

app = FastAPI()
origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def parse():
    with open('parser.py') as f:
        exec(f.read())
# parse()
@app.post('/post')
async def createItem(item: Item):
    url = {"url": item.url}
    with open("values_storage.json", "w") as f:
        json.dump(url, f)
    parse()
    return url

@app.get('/get')
async def root():
    # parse()
    with open('words_data.json') as f:
        words_data = json.load(f)
    return words_data
if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)