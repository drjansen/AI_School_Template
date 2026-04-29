/**
 * Validates a name string: must be a non-empty string of at least 2 characters.
 */
export function isValidName(name: unknown): name is string {
  return typeof name === "string" && name.trim().length >= 2;
}

/**
 * Validates an email address using a ReDoS-safe pattern.
 * Checks for the presence of a single "@" with non-empty local and domain parts,
 * and at least one dot in the domain portion.
 */
export function isValidEmail(email: unknown): email is string {
  if (typeof email !== "string" || email.length > 254) return false;
  const atIndex = email.indexOf("@");
  if (atIndex <= 0) return false;
  const local = email.slice(0, atIndex);
  const domain = email.slice(atIndex + 1);
  if (local.length === 0 || domain.length === 0) return false;
  // Domain must contain at least one dot and not start/end with a dot
  const dotIndex = domain.lastIndexOf(".");
  if (dotIndex <= 0 || dotIndex === domain.length - 1) return false;
  // Reject whitespace anywhere
  if (/\s/.test(email)) return false;
  return true;
}
