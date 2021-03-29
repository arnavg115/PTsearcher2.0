# PTsearcher2.0
PTsearcher 2 is here and it comes with some major updates.


## Update 1:
This project now uses React. This allows for almost instant results when the user queries the site. We are combining flask and React (using the React cdn) to achieve this.

## Update 2:
Since this project uses React we are also using typescript. I have included the tsconfig.json in this repo.

## Update 3: 
This project now uses docker and has an image up on docker hub.

## Update 4:
Due to the use of docker containers this site is hosted on azure.

The server is in `app.py` and all of the js is in `src/`
If you would like to run this repo locally you need `tsc` installed if you want to `tsx` or you can just go to the compiledjs folder and use create element. Also you would need pip to install the python dependencies.
1. Install
```shell
pip install -r requirements.txt
```
2. Run
```shell
python app.py
```

**note you may have to change python to python3 and pip to pip3.*
