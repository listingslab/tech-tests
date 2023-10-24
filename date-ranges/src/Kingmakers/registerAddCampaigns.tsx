import {CampaignsShape} from "./types"
import {
    setPwaKey,
    store,
    addNewCampaign,
} from "./"

export const registerAddCampaigns = () => {
    // @ts-ignore
    window.AddCampaigns = function(data) {
        try {
            let severity = "success"
            let message = "No errors"
            const newCampaigns: CampaignsShape = []
            for (let i=0; i< data.length; i++){
                store.dispatch(addNewCampaign(data[i]))
                newCampaigns.push(data[i])
            }
            message = `Success. ${newCampaigns.length} new campaign${newCampaigns.length > 1 ? "s" : ""} were added`
            store.dispatch(setPwaKey({ key: "notifyer", value: {severity, message}}))  
        } catch (error: any) {
            store.dispatch(setPwaKey({ key: "notifyer", value: {
                severity:"warning",
                message: "Pass an array of Campaigns in your method call"
            }}))  
        }         
    }
}


