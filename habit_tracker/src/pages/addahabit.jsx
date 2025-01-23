import { useState } from 'react';

function Addahabit() {
    const [name, setname] = useState("");
    const [color, setcolor] = useState("");
    const[recurring, setrecurring] = useState("Daily");
    const[type, settype] = useState("Positive");
    const[done, setdone] = useState(false);
    const [discription, setdiscription] = useState("");
    const [cue, setcue] = useState("");
    const [reward, setreward] = useState("");
    const [craving, setcraving] = useState("");

    if (recurring === "Monthly") {
        cosnt[frequency, setfrequency] = useState("1");
        cosnt [date, setdate] = useState("1");
    }
    else if (recurring === "Weekly") {
        cosnt[frequency, setfrequency] = useState("1");
        cosnt [day, setday] = useState("Monday");
    }
    const handleSubmit = (e) => {
        e.preventDefault();

    }


    return (
        <div>
            <h1>Add a habit</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label for="name">Name</label>
                    <input type="text" name="name" placeholder="Name" value={name} onChange={(e) => setname(e.target.value)}></input>
                </div>
                <div>
                    <label for="color">Color</label>
                    <input type="color" name="color" value={color} onChange={(e) => setcolor(e.target.value)}></input>
                </div>
                <div>
                    <label for="recurring">Recurring</label>
                    <select name="recurring" value={recurring} onChange={(e) => setrecurring(e.target.value)}>
                        <option value="Daily">Daily</option>
                        <option value="Weekly">Weekly</option>
                        <option value="Monthly">Monthly</option>
                    </select>
                </div>
                <div>
                    <label for="type">Type</label>
                    <select name="type" value={type} onChange={(e) => settype(e.target.value)}>
                        <option value="Positive">Positive</option>
                        <option value="Negative">Negative</option>
                    </select>
                </div>
                <div>
                    <label for="discription">Discription</label>
                    <input type="text" name="discription" placeholder="Discription" value={discription} onChange={(e) => setdiscription(e.target.value)}></input>
                </div>
                <div>
                    <label for="cue">Cue</label>
                    <input type="text" name="cue" placeholder="Cue" value={cue} onChange={(e) => setcue(e.target.value)}></input>
                </div>
                <div>
                    <label for="reward">Reward</label>
                    <input type="text" name="reward" placeholder="Reward" value={reward} onChange={(e) => setreward(e.target.value)}></input>
                </div>
                <div>
                    <label for="craving">Craving</label>
                    <input type="text" name="craving" placeholder="Craving" value={craving} onChange={(e) => setcraving(e.target.value)}></input>
                </div>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default Addahabit
