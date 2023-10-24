import { 
  setPwaKey,
  store,
} from "../.."

export const addNewCampaign =
  (campaign: any): any =>
  async (dispatch: any) => {
    try {
        const {campaigns} = store.getState()
        let b: any = campaign.budget
        if (!b) b = campaign.Budget
        if (!b) b = 0
        const nC = {
          id: campaign.id,
          name: campaign.name,
          startDate: campaign.startDate,
          endDate: campaign.endDate,
          budget: b,
        }
        const newCampaigns = [nC, ...campaigns ]
        dispatch(setPwaKey({ key: "campaigns", value: newCampaigns }))
    } catch (error: any) {
      console.log("Action error: addNewCampaign", error)
    }
  }
