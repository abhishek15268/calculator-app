from backend.app import app

def test_add():
    with app.test_client() as client:
        resp = client.post("/add", json={"a": 5, "b": 3})
        assert resp.get_json()["result"] == 8

def test_divide_by_zero():
    with app.test_client() as client:
        resp = client.post("/divide", json={"a": 5, "b": 0})
        assert resp.status_code == 400

