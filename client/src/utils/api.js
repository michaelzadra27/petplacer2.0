const key = "3m8nwrVMxrsMJ4n6XvooyVdxjqVRqKMLiiIrR036M3ynyptSbR"
const secret = "vT3chXJ3ddzDrpStykKDftVGJ55X1nCGDXPOJJNN"
//console.log("before token")

const getToken = async () => {
      console.log("token function")
      const params = new URLSearchParams();
      params.append("grant_type", "client_credentials");
      params.append("client_id", key);
      params.append("client_secret", secret);
      const petRes = await fetch(
        "https://api.petfinder.com/v2/oauth2/token",
        {
          method: "POST",
          body: params,
        }
      );
      const data = await petRes.json();
      console.log(data)

    };

getToken();
