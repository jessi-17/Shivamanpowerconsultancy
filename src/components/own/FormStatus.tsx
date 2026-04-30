// Visually-hidden live region announcing form status changes to screen readers.
// Errors use role="alert" so they interrupt; successes use role="status" (polite).
export default function FormStatus({
  status,
  successText = "Form submitted successfully",
  errorText = "There was an error submitting the form. Please try again.",
}: {
  status: "idle" | "loading" | "success" | "error";
  successText?: string;
  errorText?: string;
}) {
  const message =
    status === "loading"
      ? "Submitting form, please wait."
      : status === "success"
      ? successText
      : status === "error"
      ? errorText
      : "";

  return (
    <div
      role={status === "error" ? "alert" : "status"}
      aria-live={status === "error" ? "assertive" : "polite"}
      style={{
        position: "absolute",
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0,0,0,0)",
        whiteSpace: "nowrap",
        border: 0,
      }}
    >
      {message}
    </div>
  );
}
