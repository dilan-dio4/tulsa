import React, { type ReactNode } from 'react';

import styles from './styles.module.css';

interface Props {
    children: ReactNode;
    minHeight?: number;
    url?: string;
    pad?: boolean;
}

export default function BrowserWindow({
    children,
    minHeight,
    url = 'https://app.easybase.io',
    pad
}: Props): JSX.Element {
    return (
        <div className={styles.browserWindow} style={{ minHeight }}>
            <div className={styles.browserWindowHeader}>
                <div className={styles.buttons}>
                    <span className={styles.dot} style={{ background: '#f25f58' }} />
                    <span className={styles.dot} style={{ background: '#fbbe3c' }} />
                    <span className={styles.dot} style={{ background: '#58cb42' }} />
                </div>
                <div className={styles.browserWindowAddressBar}>{url}</div>
                <div className={styles.browserWindowMenuIcon}>
                    <div>
                        <span className={styles.bar} />
                        <span className={styles.bar} />
                        <span className={styles.bar} />
                    </div>
                </div>
            </div>

            <div className={styles.browserWindowBody} style={{ padding: pad ? "1rem" : 0, lineHeight: 1.2 }}>{children}</div>
        </div>
    );
}