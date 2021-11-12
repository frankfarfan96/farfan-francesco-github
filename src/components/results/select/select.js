import './select.css';

export const Select = () => {
    return (
        <div className="posizioneselect">
            <div className="select">
                <p>Primo Anno : </p>
                <select>
                    <option value="">-</option>
                    <option value="FullStack 21/22">FullStack 21/22</option>
                    <option value="DigitalMarketing 21/22">Digital Marketing 21/22</option>
                    <option value="Cyber Security 21/22">Cyber Security 21/22</option>
                </select>
            </div>
            <div className="select">
            <p>Secondo Anno : </p>
                <select>
                    <option value="">-</option>
                    <option value="FullStack 20/21">FullStack 20/21</option>
                    <option value="DigitalMarketing 21/22">Digital Marketing 20/21</option>
                    <option value="Cyber Security 21/22">Cyber Security 20/21</option>
                </select>
            </div>
        </div>
    )
}