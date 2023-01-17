import { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import "./style.css";

const LoginContainer = () => {
  const { register, handleSubmit, formState, setFocus } = useForm({
    mode: "onTouched",
  });
  const { errors, isDirty, dirtyFields, submitCount, isValid } = formState;
  const [incredibleBigWall, setIncredibleBigWall] = useState(true);
  const [visibleModal, setVisibleModal] = useState(false);
  const onSubmit = (data) => {
    if (isValid && incredibleBigWall) {
      //setVisibleModal(true);
      window.location = "/movies-list";
      
    }
  };

  const inputfocuse = useRef();

  useEffect(() => {
    const firstError = Object.keys(errors).reduce((field, a) => {
      return !!errors[field] ? field : a;
    }, null);
    if (firstError) {
      console.log("error ", firstError);
    }
  }, [register.username, register.password, setFocus]);

  const Modal = () => {
    return (
      <div
        style={{
          position: "relative",
          alignSelf: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: 50,
          border: "1px solid white",
          backgroundColor: "#00cec9",
          borderRadius: 25,
        }}
      >
        <div>Ils reagissent bizarrement ces 2 inputs nan ? </div>
        <div>Un peu de css serait le bienvenue je pense :)</div>
        <div style={{ marginTop: 30 }}>
          Et si tu te sent chaud tu pourrais peut-être régler le problème de
          focus ?!
        </div>
        <button
          style={{ marginTop: 20 }}
          onClick={() => setVisibleModal(false)}
        >
          Avec grand plaisir, j'adore react
        </button>
      </div>
    );
  };

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        height: "100vh",
        justifyContent: "center",
      }}
    >
      <img
        style={{ position: "absolute", width: "100%" }} alt=""
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Ktwg3SIcKec-etvsGt_6_QHaKe%26pid%3DApi&f=1"
      />
      {visibleModal && <Modal />}
      {!visibleModal && (
        <div
          style={{
            position: "relative",
            alignSelf: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: 50,
            border: "2px solid white",
            backgroundColor: "#222",
            position: "fixed",
            borderRadius: 25,
          }}
        >
          <div
            style={{
              padding: "0 30px",
              position: "absolute",
              top: -28,
              left: "20%",
              right: "20%",
              height: 60,
              textAlign: "center",
              backgroundColor: "rgb(243, 255, 255)",
              fontFamily: "sans-serif",
              borderRadius: 10,
            }}
          >
            Bienvenue jeune padawan
          </div>
          <form
            style={{ display: "flex", flexDirection: "column", minWidth: 300 }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="form-group mt-2 mb-2">
              <label
                htmlFor={"email"}
                style={{ textAlign: "end" }}
                // className={!dirtyFields?.[name] ? "coucou2" : "coucou2"}
                onClick={() => setFocus("email")}
              >
                email
              </label>
              <input
                ref={inputfocuse}
                type="email"
                name={"email"}
                className="form-control"
                placeholder="jhondoe@gmail.com"
                defaultValue=""
                {...register("email", { required: true })}
              />
              {errors?.email && (
                <span
                  style={{ fontSize: 18, fontWeight: "bold", color: "#fab1a0" }}
                >
                  Le champ email est obligatoire
                </span>
              )}
            </div>
            <div className="form-group mt-2 mb-2">
              <label
                htmlFor={"password"}
                style={{ textAlign: "end" }}
                // className={!dirtyFields?.[name] ? "coucou2" : "coucou2"}
                onClick={() => setFocus("password")}
              >
                password
              </label>
              <input
                ref={inputfocuse}
                type="password"
                name={"password"}
                className="form-control"
                defaultValue=""
                {...register("password", { required: true })}
              />
              {errors?.password && (
                <span
                  style={{ fontSize: 18, fontWeight: "bold", color: "#fab1a0" }}
                >
                  Le champ password est obligatoire
                </span>
              )}
            </div>

            <input
              type="submit"
              className="btn btn-primary mt-4"
              value="Accéder à la suite"
            />
          </form>
        </div>
      )}
    </div>
  );
};

export default LoginContainer;