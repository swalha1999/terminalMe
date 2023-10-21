import { getIp, println, newLine } from '../utils/utils';

export async function ipconfig(args: string[]): Promise<void> {
    println(`eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
    inet ${getIp()}  netmask 255.255.240.0  broadcast ${getIp()}
    inet6 ff82::255:5d3ff:ef52:fe9f  prefixlen 64  scopeid 0x20<link>
    ether 04:25:5f:42:af:9d  txqueuelen 1000  (Ethernet)
    RX packets 4139  bytes 3061872 (3.0 MB)
    RX errors 0  dropped 0  overruns 0  frame 0
    TX packets 3117  bytes 634481 (634.4 KB)
    TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0`);
    newLine();
    println(`lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536
    inet 127.0.0.1  netmask 255.0.0.0
    inet6 ::1  prefixlen 128  scopeid 0x10<host>
    loop  txqueuelen 1000  (Local Loopback)
    RX packets 20595  bytes 35163043 (35.1 MB)
    RX errors 0  dropped 0  overruns 0  frame 0
    TX packets 20595  bytes 35163043 (35.1 MB)
    TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0`);
    newLine();
    println(`your ip is: ${getIp()}`, 'orange');
}

export async function ifconfig(args: string[]): Promise<void> {
    await ipconfig(args);
}
