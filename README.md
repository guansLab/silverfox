# Silver foxes

## Installing Virtual Environment
- We use a virtual python interpreter environment to manage dependencies for the back-end project. This is achieved by using virtualenvwrapper which inturn uses virtual env.
### Installing and configuring virtualenvwrapper
- ``sudo apt install virtualenv``
- ``pip install virtualenvwrapper``
- Add the following to your ./bashrc file
	- ``export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3``
	- ``export WORKON_HOME=$HOME/.virtualenvs``
	- ``export VIRTUALENVWRAPPER_VIRTUALENV=$HOME/.local/bin/virtualenv``
	- ``source /usr/local/bin/virtualenvwrapper.sh``
- Run ``source ~/.bashrc`` in your terminal.
### Creating and managing virtual environment
- To create a new environment run, ``mkvritualenv silver_foxes``, replace silver_foxes with whatever name you want for the environment.
- Once activated, run pip install -r requirements/dev.txt (for dev environment and choose accordingly).
- Any pip install that you do during your development be sure to add it to dev.txt or prod (whatever you see fit). You can ``pip freeze > requirements/dev.txt`` if there are many dependencies to be added.
- To deactivate this python environment, run ``deactivate`` in your terminal.
