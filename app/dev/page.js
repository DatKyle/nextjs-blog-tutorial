import Layout from "../../components/layout";

export default async function Page() {
    const environments = process.env;
    const keys = Object.keys(process.env);
    return (
        <Layout>
            <table>
                <thead>
                    <tr>
                        <th>Key</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {keys.map((key) => {
                        const value = environments[key]
                        return (
                            <tr key={key}>
                                <td>{key}</td>
                                <td>{value}</td>
                            </tr>
                        );
                    })}
                </tbody>s
            </table>
        </Layout>
    );
}