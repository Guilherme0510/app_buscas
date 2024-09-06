interface SectionProps {
    image: string;
    text: string;
    reverse?: boolean;
}

export const Section: React.FC<SectionProps> = ({ image, text, reverse = false }) => {
    return (
        <div className={`row align-items-center my-5 ${reverse ? 'flex-row-reverse' : ''}`}>
            <div className="col-md-6">
                <img src={image} className="img-fluid" alt="section-img" />
            </div>
            <div className="col-md-6">
                <p>{text}</p>
            </div>
        </div>
    );
};