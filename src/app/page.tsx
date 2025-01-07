import Head from "next/head";

const LoginPage: React.FC = () => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Kadwa:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <title>Login - ALKES.COM</title>
      </Head>
      <div style={styles.container}>
        {/* Left Panel */}
        <div style={styles.leftPanel}>
          <h1 style={styles.title}>ALKES.COM</h1>
          <p style={styles.subtitle}>
            Sudah punya akun? Masuk dan mulai eksplorasi!
          </p>
        </div>

        {/* Right Panel */}
        <div style={styles.rightPanel}>
          <h2 style={styles.loginTitle}>Login Here</h2>
          <form style={styles.form}>
            <input
              type="email"
              placeholder="email..."
              style={styles.input}
            />
            <input
              type="password"
              placeholder="password..."
              style={styles.input}
            />
            <p style={styles.registerText}>
              Belum punya akun?{" "}
              <a href="/register" style={styles.link}>
                Buat sekarang
              </a>
            </p>
            <button type="submit" style={styles.button}>
              continue
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    fontFamily: "'Kadwa', sans-serif", // Font utama
  },
  leftPanel: {
    flex: 1,
    background: "linear-gradient(to bottom, #00BFFF, #8EE4FF)", // Gradasi warna biru
    color: "#FFF",
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  rightPanel: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  title: {
    fontSize: "36px",
    fontWeight: 700, // Bold untuk Kadwa
    margin: "0",
  },
  subtitle: {
    fontSize: "18px",
    marginTop: "10px",
    textAlign: "center" as const,
    lineHeight: "1.5",
  },
  loginTitle: {
    fontSize: "24px",
    fontWeight: 700, // Bold untuk Kadwa
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column" as const,
    width: "80%",
  },
  input: {
    marginBottom: "15px",
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #CCC",
    borderRadius: "5px",
    boxShadow: "0 3px 6px rgba(0, 0, 0, 0.1)",
  },
  registerText: {
    fontSize: "14px",
    marginBottom: "20px",
    textAlign: "center" as const,
  },
  link: {
    color: "#00BFFF",
    textDecoration: "none",
    fontWeight: 700,
  },
  button: {
    background: "linear-gradient(to right, #00BFFF, #66D8FF)", // Gradasi tombol
    color: "#FFF",
    padding: "10px",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: 700,
    transition: "all 0.3s",
  },
};

export default LoginPage;
