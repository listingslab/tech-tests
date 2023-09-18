export const resetRedux = (): any => async (dispatch: any) => {
    try {
        localStorage.removeItem("persist:listingslab")
        setTimeout(() => {
          window.location.reload()
        }, 200)
    } catch (error: any) {
      console.log("Action error: resetRedux", error)
    }
  }
