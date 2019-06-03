import json
from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_jwt_extended import JWTManager, jwt_required, create_access_token, get_jwt_identity
from werkzeug.security import generate_password_hash, check_password_hash

# flask stuff
app = Flask(__name__)
app.config["JWT_SECRET_KEY"] = "<+jdeq.355Uuy9'!W*"
CORS(app)
jwt = JWTManager(app)

# "DB" stuff
current_db = []
with open("db.json", "r") as f:
    current_db = json.loads(f.read())
# print(current_db)


def get_user(username):
    for user in current_db["users"]:
        if user["username"] == username:
            return user


def check_user(username):
    for user in current_db["users"]:
        if user["username"] == username:
            return user["username"] == username
    return False


def check_password(username, password):
    for user in current_db["users"]:
        if user["username"] == username:
            # return user["password"] == password
            return check_password_hash(user["password"], password)
    return False


def create_user(username, password):
    for user in current_db["users"]:
        if user["username"] == username:
            return False

    new_id = -1
    for user in current_db["users"]:
        if new_id <= user["id"]:
            new_id = user["id"] + 1

    current_db["users"].append({
        "id": new_id,
        "username": username,
        "password": generate_password_hash(password)
    })

    with open("db.json", "w") as f:
        f.write(json.dumps(current_db))

    return True

# routes
@app.route("/", methods=["GET"])
def root():
    return "test", 200


@app.route("/protec", methods=["GET"])
@jwt_required
def protec():
    return "This is secret!"


@app.route("/users/<username>", methods=["GET"])
@jwt_required
def get_one_user(username):
    tmp = get_user(username)
    return jsonify(tmp)


@app.route("/login", methods=["POST"])
def login():
    if not request.json:
        return jsonify({"Message": "No data sent"})

    username = request.json.get('username', None)
    password = request.json.get('password', None)

    if not username or not password:
        return jsonify({"Message": "Fill out the form properly..."})

    if not check_user(username):
        return jsonify({"Message": "Bad user"})

    if not check_password(username, password):
        return jsonify({"Message": "Bad password"})

    token = create_access_token(identity=username)
    return jsonify({"Token": token})


@app.route("/register", methods=["POST"])
def register():
    if not request.json:
        return jsonify({"Message": "No data sent"})

    username = request.json.get('username', None)
    password = request.json.get('password', None)

    if not username or not password:
        return jsonify({"Message": "Fill out the form properly..."})

    if create_user(username, password):
        return jsonify(get_user(username))


# main
if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port="5002")
