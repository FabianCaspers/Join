async function init() {
  await downloadFromServer();
}
setURL("https://join.fabiancaspers.com/smallest_backend_ever");

let users = [];

async function onSubmit(event) {
  event.preventDefault();
  let formData = new FormData(event.target);
  let response = await action(formData);
}

function action(formData) {
  const input =
    "https://join.fabiancaspers.com/login/send_mail.php";
  const requestInit = {
    method: "post",
    body: formData,
  };

  return fetch(input, requestInit);
}
