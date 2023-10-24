export const scrollTop =
  (): any =>
  async (dispatch: any) => {
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error: any) {
      console.log("Action error: scrollTop", error)
    }
  }