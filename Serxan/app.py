from flask import Flask

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:1234@127.0.0.1:3306/Unibank_Cards'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True

# from extensions import *
# from models import *
# from controller import *


if __name__ == '__main__':
    # app.init_app(db)
    # app.init_app(migrate)
    app.run(debug=True)



