import { useForm } from "react-hook-form";

const wait = (duration = 1000) =>
new Promise((resolve) => {
  window.setTimeout(resolve, duration);
});


const MyForm = () => {
    const { register, handleSubmit, formState, setError } = useForm({
        mode: "onTouched",
      });
      const { isSubmitting, errors, isSubmitted, isSubmitSuccessful } = formState;
    
      const onSubmit = async (data) => {
        await wait(2000);
        setError('username',  {
          type: 'minLength',
          message: 'the server catched length < 3'
        })
      };
    
      console.log(errors);
      console.log(formState);
    
      return (
        <form className="container py-5" onSubmit={handleSubmit(onSubmit)}>
          <h1>Inscription</h1>
          {isSubmitSuccessful && <div className="alert alert-success">Merci pour votre inscription</div>}
          <div className="row">
            <div className="col-md-6 form-group">
              <label htmlFor="username">UserName</label>
              <input
                id="username"
                defaultValue={"hello massi"}
                className="form-control"
                type="text"
                name="username"
                {...register("username", {
                  required: "vous devez entre un nom d'utilisateur",
                  minLength: { value: 3, message: "il faut plus que " },
                })}
              />
              {errors.username && <span>{errors.username.message}</span>}
            </div>
            <div className="col-md-6 form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                defaultValue={"massi@gmail.com"}
                className="form-control"
                type="email"
                name="email"
                {...register("email", { required: true })}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-md-6 form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                {...register("password", { required: true })}
                defaultValue={"hello there"}
                className="form-control"
                type="password"
                name="password"
              />
            </div>
          </div>
          <button disabled={isSubmitting} className="btn btn-primary">
            S'inscrire
          </button>
        </form>
      );
}

export default MyForm;