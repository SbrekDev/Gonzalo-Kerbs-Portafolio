import { useState } from "react"
import { useTranslation } from "react-i18next"

export default function SubmitForm() {
    const [result, setResult] = useState("");
    const { t } = useTranslation()

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setResult(t('CONTACT_FORM_RESPONSE_PENDING'));

        const form = e.currentTarget;
        const formData = {
            access_key: import.meta.env.VITE_FORM_KEY,
            name: (form.elements.namedItem("name") as HTMLInputElement).value,
            email: (form.elements.namedItem("email") as HTMLInputElement).value,
            message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
        };


        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (data.success) {
                setResult(t('CONTACT_FORM_RESPONSE_SUCCESS'));
                form.reset();
            } else {
                console.log("Error", data);
                setResult(t('CONTACT_FORM_RESPONSE_ERROR'));
            }

        } catch (err) {
            console.error(err);
            setResult(t('CONTACT_FORM_RESPONSE_ERROR'));
        }

        setTimeout(() => {
            setResult('');
        }, 3000);
    };

    return (
        <div className="relative flex flex-col justify-center w-full max-w-[800px] px-5 items-center text-white font-thin">
            <form onSubmit={onSubmit} className="flex flex-col gap-4 w-full">
                <div className="flex flex-col gap-2 text-xl">
                    <label htmlFor="name" className="font-normal">{t('CONTACT_FORM_NAME')}</label>
                    <input type="text" name="name" id="name" className="p-3 bg-secondary/30 shadow-lg border-b-4 border-accent rounded-md outline-none" required />
                </div>
                <div className="flex flex-col gap-2 text-xl">
                    <label htmlFor="email" className="font-normal">{t('CONTACT_FORM_EMAIL')}</label>
                    <input type="email" name="email" id="email" className="p-3 bg-secondary/30 shadow-lg border-b-4 border-accent rounded-md outline-none" required />
                </div>
                <div className="flex flex-col gap-2 text-xl">
                    <label htmlFor="message" className="font-normal">{t('CONTACT_FORM_MESSAGE')}</label>
                    <textarea name="message" id="message" className="p-3 bg-secondary/30 shadow-lg border-b-4 border-accent rounded-md min-h-48 outline-none" required></textarea>
                </div>
                <button
                    type="submit"
                    disabled={result === t('CONTACT_FORM_RESPONSE_PENDING')}
                    className={`text-center w-full bg-accent px-5 py-3 rounded-md shadow-md hover:bg-secondary hover:text-accent md:transition-all disabled:opacity-30 disabled:hover:bg-accent disabled:hover:text-white disabled:cursor-not-allowed`}
                >
                    {t('CONTACT_FORM_BUTTON')}
                </button>
            </form>
            <p className="absolute left-1/2 -translate-x-1/2 bottom-[-40px] w-full text-accent text-center mx-auto">
                {result} {result === t('CONTACT_FORM_RESPONSE_PENDING') || result === '' ? null : (<i className={`fa-solid fa-circle-${result === t('CONTACT_FORM_RESPONSE_SUCCESS') ? 'check' : 'xmark'}`}></i>)}
            </p>
        </div>
    );
}
