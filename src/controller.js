import {countString} from './service';

export const healTheDream = async (req, res)  => {
    const {text} = req.body;
    const data = countString(text);
    await res.send(data);
}

//**TODO next to handle wrong input */