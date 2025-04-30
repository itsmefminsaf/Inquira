import crypto from "crypto";

const checkPassword = async (
  actualPasswordInfo: { hash: string; salt: string },
  enteredPassword: string,
): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    crypto.scrypt(
      enteredPassword,
      actualPasswordInfo.salt,
      64,
      (err, derivedKey) => {
        if (err) {
          reject(err);
        }
        const actualPasswordHash = Buffer.from(actualPasswordInfo.hash, "hex");
        resolve(crypto.timingSafeEqual(derivedKey, actualPasswordHash));
      },
    );
  });
};

export default checkPassword;
