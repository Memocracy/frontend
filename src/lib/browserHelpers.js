export const scrollToRef = (ref, navbarHeight = 60) =>
  window.scrollTo({
    left: 0,
    top: ref.current.offsetTop - navbarHeight,
    behavior: "smooth",
  });

/**
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 * @param {*} url
 * @param {*} data
 * @returns
 */
export const postData = async (url, data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "omit",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });

  if (response.status !== 200) {
    throw Error(response.statusText);
  }

  return response.json();
};
